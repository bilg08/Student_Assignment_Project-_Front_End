import ImageIcon from "@mui/icons-material/Image";
import { Chip } from "@mui/material";
import { getCookie } from "cookies-next";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { io } from "socket.io-client";
import { instance } from "../../components/Layout";
import { useIsAgainGetDatas, useUserContext } from "../../context";
import { PostButton } from "../ui/postButton";
export const connectChatServer = () => {
	const socket = io("https://backend-leap2-production.up.railway.app/", {
		transports: ["websocket"],
	});
	return socket;
};

export const ColasipbleChatBox = ({ chatRoomName }: any) => {
	const [isSentMessage, setIsSentMessage] = useState(false);
	const [message, setMessage] = useState("");
	const { user } = useUserContext();
	const { setIsAgainGetDatas } = useIsAgainGetDatas();
	const [file, setFile] = useState("");
	const [fileUrl, setFileUrl] = useState("");

	const [messages, setMessages] = useState([
		{ message: "", createdAt: "", owner: { email: "" }, photo: "" },
	]);
	const listRef = useRef<HTMLElement | any>();
	useEffect(() => {
		let socket = connectChatServer();
		socket.emit(chatRoomName, message);
		return () => {
			socket.disconnect();
		};
	}, [isSentMessage]);

	useEffect(() => {
		let socket = connectChatServer();
		socket.onAny(async (type, message) => {
			if (message && type === chatRoomName) {
				flushSync(() => {
					setIsSentMessage((e) => !e);
				});
				scrollToLastMessage();
			}
		});
		return () => {
			socket.disconnect();
		};
	}, []);
	useEffect(() => {
		async function sendChat() {
			const form = new FormData();
			form.append("message", message);
			form.append("file", file);
			try {
				await instance.post(`/chat/${chatRoomName}/sendMessage`, form);
				scrollToLastMessage();
			} catch (error) {}
		}
		if (message !== "" && chatRoomName !== "") sendChat();
	}, [isSentMessage]);
	useEffect(() => {
		(async function getMessages() {
			setIsAgainGetDatas((e: any) => !e);
			try {
				const data = await instance.get(`/chat/${chatRoomName}/getMessages`, {
					headers: {
						authorization: getCookie("token"),
					},
				});
				flushSync(async () => {
					setMessages(data.data.data);
					setFile("");
				});
				scrollToLastMessage();
			} catch (error) {}
		})();
	}, [chatRoomName, isSentMessage]);

	function scrollToLastMessage() {
		let lastChild = listRef.current!.lastElementChild;
		lastChild?.scrollIntoView({
			behavior: "smooth",
		});
	}
	function handleUploadFile(e: any) {
		var file = e.target.files[0];
		var reader = new FileReader();
		reader.onload = function (event: any) {
			setFileUrl(event.target.result);
		};
		reader.readAsDataURL(file);

		setFile(e.target.files[0]);
	}

	return (
		<div className='h-48 w-[100%] '>
			<div
				className='h-2/3  border border-green-500 rounded-lg
			 overflow-scroll 
			  '>
				<ul ref={listRef}>
					{messages &&
						messages.map((message) => {
							return (
								<li className={`m-1 flex justify-between w-full px-1`}>
									{message && user.email === message.owner.email ? (
										<div>
											<span></span>
											<div>
												<Chip label={message.message} />
												{message.photo ? (
													<img
														style={{ width: `150px`, height: "150px" }}
														src={`https://backend-leap2-production.up.railway.app/chat/photo/${message.photo}`}
													/>
												) : (
													""
												)}
											</div>
										</div>
									) : (
										<div>
											<div>
												<Chip
													variant='outlined'
													label={message.message}
												/>
												{message.photo ? (
													<img
														style={{ width: `50px`, height: "50px" }}
														src={`https://backend-leap2-production.up.railway.app/chat/photo/${message.photo}`}
													/>
												) : (
													""
												)}
											</div>
											<span></span>
										</div>
									)}
								</li>
							);
						})}
				</ul>
			</div>
			<div
				style={{ display: "flex", alignItems: "center" }}
				className='flex flex-row items-center  '>
				<input
					value={message}
					onChange={async (e) => {
						await setMessage(e.target.value);
					}}
					className='border border-green-500 bg-grey-100 rounded-lg w-4/6 h-8 align-center mt-2 mr-2'></input>
				<label>
					<ImageIcon className='text-blue-500' />
					<input
						className='hidden'
						onChange={(e) => {
							handleUploadFile(e);
						}}
						type='file'
					/>
				</label>
				<PostButton
					data={"????????????"}
					prop={"#77c3ec"}
					ym={async () => {
						if (message !== "" && chatRoomName !== "") {
							await setIsSentMessage((e) => !e);
							setMessage("");
						}
					}}></PostButton>
			</div>
		</div>
	);
};
