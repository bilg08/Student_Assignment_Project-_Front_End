import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import { instance } from "../../components/Layout";
import { useIsAgainGetDatas, useLoaderContext } from "../../context";
import { MyImage } from "../index";
export interface PostModalProps {
	cActive: any;
	setCactive: any;
}

export const PostModal: React.FC<PostModalProps> = ({ setCactive }) => {
	const [fileSelected, setFileSelected] = useState<any | null>([]);
	const [createObjectURL, setCreateObjectURL] = useState<any | null>(null);
	const [school, setSchool] = useState("");
	const { setIsAgainGetDatas } = useIsAgainGetDatas();
	const [schoolLessons, setSchoolLessons] = useState([]);
	const [schools, setSchools] = useState<any>([]);
	const [schoolGroup, setSchoolGroup] = useState<any>([]);
	const [subject, setSubject] = useState("");
	const [group, setGroup] = useState("");
	const { setOpenshadow, shadow } = useLoaderContext();
	useEffect(() => {
		const getData = async () =>
			await instance
				.get("/school")
				.then(async function (response) {
					setSchools([]);
					response.data.data.map(
						(school: { school: ""; ROOT: { group: [] } }) => {
							setSchools((schools: any) => [
								...schools,
								{
									name: school.school,
									groupAndThatGrouplessons: school.ROOT.group,
								},
							]);
						}
					);
				})
				.catch(function (response) {});
		getData();
		return () => {
			getData();
		};
	}, []);

	useEffect(() => {
		schools.map((school1: any) => {
			if (school1.name === school) {
				school1.groupAndThatGrouplessons.map((group: any) =>
					setSchoolGroup((prev: any) => [...prev, group.GroupName])
				);
			}
		});
	}, [school, group]);
	useEffect(() => {
		schools.map((school1: any) => {
			if (school1.name === school) {
				school1.groupAndThatGrouplessons.map((group1: any) => {
					if (group1.GroupName === group) {
						setSchoolLessons(group1.course);
					}
				});
			}
		});
	}, [group]);
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formDatas = new FormData();
		formDatas.append("advertisingHeader", event.currentTarget.first.value);
		formDatas.append("detail", event.currentTarget.second.value);
		formDatas.append("price", event.currentTarget.third.value);
		formDatas.append("group", group);
		formDatas.append("school", school);
		formDatas.append("subject", subject);
		formDatas.append("file", fileSelected);
		await instance
			.post("/post", formDatas)
			.then(async function (response) {
				await setCactive(false);
				alert("?????? ?????????????????? ??????????????????");
				setIsAgainGetDatas((e: any) => !e);
				setOpenshadow(false);
			})
			.catch(function (response) {
				const error = response.response.data.error.split(",");
				error.map((el: string) => alert(el));
			});
	};

	const uploadFile = function (e: any) {
		if (e.target.files && e.target.files[0]) {
			const i = e.target.files[0];
			setFileSelected(i);
			setCreateObjectURL(URL.createObjectURL(i));
		}
	};

	return (
		<form
			className='w-full overflow-y-scroll border-2 border-dark-purple sm:w-3/4 md:w-2/4 z-30 lg:w-auto h-[80vh] absolute top-2/4  left-2/4 transform -translate-x-1/2 -translate-y-1/2 p-10 rounded-lg backdrop-blur-md bg-white  '
			onSubmit={handleSubmit}>
			<ClearIcon
				sx={{ position: "absolute", right: "23px", marginBottom: "4px" }}
				onClick={() => {
					setCactive(false);
					setOpenshadow(false);
				}}
			/>
			<div className='flex flex-wrap -mx-3 mb-6'>
				<div className='w-full 2 px-3 mb-6 md:mb-0'>
					<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center mt-6'>
						?????????? ??????
					</label>
					<input
						className='block w-full bg-white text-gray-700 border border-dark-purple rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
						id='grid-first-name'
						type='text'
						placeholder='Title'
						name='first'></input>
				</div>
			</div>
			<div className='flex flex-wrap -mx-3 mb-6'>
				<div className='w-full px-3'>
					<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center'>
						??????????????????????
					</label>
					<input
						className='appearance-none block w-full h-auto bg-white text-gray-700 border border-dark-purple rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white '
						type='text'
						placeholder='...'
						name='second'></input>
				</div>
			</div>
			<div className='w-full  mb-6 md:mb-0'>
				<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
					????????????????
				</label>
				<div className='relative'>
					<select
						className='block appearance-none w-full bg-white border border-dark-purple text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
						id='grid-state'
						name='fourth'
						onChange={async (e) => {
							await setSchool(e.target.value);
						}}>
						<option></option>
						{schools.map((school: { name: "" }, i: number) => (
							<option
								value={school.name}
								key={school.name + i}>
								{school.name}
							</option>
						))}
					</select>
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
						<svg
							className='fill-current h-4 w-4'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
						</svg>
					</div>
				</div>
			</div>
			<div className='flex flex-wrap -mx-3 mb-2'>
				<div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
					<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
						????????????
					</label>
					<input
						className='appearance-none block w-full bg-white text-gray-700 border border-dark-purple rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
						type='text'
						placeholder='deal'
						name='third'></input>
				</div>
				<div className='w-full md:w-2/3 px-3 mb-6 md:mb-0'>
					<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
						??????????
					</label>
					<div className='relative'>
						<select
							className='block appearance-none w-full bg-white border border-dark-purple text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-state'
							onChange={(e) => setGroup(e.target.value)}
							name='fourth'>
							<option></option>
							{schoolGroup?.map((group: string) => (
								<option key={group}>{group}</option>
							))}
						</select>
						<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
							<svg
								className='fill-current h-4 w-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'>
								<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
							</svg>
						</div>
					</div>
					<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-2 mb-2'>
						????????????
					</label>
					<div className='relative'>
						<select
							className='block appearance-none w-full bg-white border border-dark-purple text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='grid-state'
							onChange={(e) => {
								setSubject(e.target.value);
							}}
							name='fourth'>
							<option></option>
							{schoolLessons?.map((schoolLesson: any, i: number) => {
								return (
									<option key={schoolLesson + i}>{schoolLesson.subject}</option>
								);
							})}
						</select>
						<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
							<svg
								className='fill-current h-4 w-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'>
								<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
							</svg>
						</div>
					</div>
				</div>
			</div>
			<MyImage src={createObjectURL} />

			<div className='flex justify-center items-center w-full '>
				<input
					className='block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer  focus:outline-none  '
					id='small_size'
					type='file'
					onChange={uploadFile}></input>
			</div>

			<button
				type='submit'
				className='w-full h-fit text-white bg-dark-purple border border-dark-purple rounded-md p-2 '>
				????????????
			</button>
		</form>
		// 	</DialogContent>
		// </Dialog>
		//bg-gradient-to-r from-purple-300 to-violet-200
	);
};
