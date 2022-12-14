import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import {
	useCollectionContext,
	useIsUserLoggedContext,
	useLoaderContext,
	useSearchContext,
	useUserContext,
} from "../context";
import { Menu, MenuItem, Popover, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useWindowWidth } from "../hooks";

export const Header = () => {
	const { userInput, setUserInput } = useSearchContext();
	const [schoolLessons, setSchoolLessons] = useState([]);
	const [schools, setSchools] = useState<any>([]);
	const [schoolGroup, setSchoolGroup] = useState<any>([]);
	const router = useRouter();
	const width = useWindowWidth();
	const { isLoggedIn } = useIsUserLoggedContext();
	const { setCactive } = useCollectionContext();
	const { setOpenshadow } = useLoaderContext();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { user } = useUserContext();

	useEffect(() => {
		const getData = async () =>
			await axios({
				method: "get",
				url: "https://backend-leap2-production.up.railway.app/school",
			})
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
			if (school1.name === userInput.school) {
				school1.groupAndThatGrouplessons.map((group: any) =>
					setSchoolGroup((prev: any) => [...prev, group.GroupName])
				);
			}
		});
		schools.map((school1: any) => {
			if (school1.name === userInput.school) {
				school1.groupAndThatGrouplessons.map((group1: any) => {
					if (group1.GroupName === userInput.group) {
						setSchoolLessons(group1.course);
					}
				});
			}
		});
	}, [userInput.school, userInput.group]);
	return (
		<header>
			<nav className='bg-white   border-gray-300 px-4 lg:px-6 py-2.5 border-b-2 '>
				<div className='flex justify-between  items-center m-auto max-w-screen-xl'>
					<div
						onClick={() => {
							router.push("/");
						}}
						className='flex items-center'>
						{/* <img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
							className='mr-3 h-6 sm:h-9'
							alt='Flowbite Logo'
						/> */}
						<span className='self-center text-xl font-semibold whitespace-nowrap '>
							.doItAll
						</span>
					</div>
					<div className='flex flex-row w-1/6 justify-between '>
						<div className='flex items-center lg:order-3'>
							<div
								style={{ display: isLoggedIn ? "none" : "block" }}
								onClick={() => router.push("loginPage")}
								className='z-10 text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none '>
								??????????????/????????????????????
							</div>

							<img
								onClick={(e) => {
									if (router.pathname === "/") {
										router.push("profile");
									}
									setAnchorEl(e.currentTarget);
								}}
								style={{ display: isLoggedIn ? "block" : "none" }}
								className='h-12 w-12 rounded-full border-dark-purple border-2 mb-4'
								src={
									(isLoggedIn && user.photo) === "no-photo.png"
										? "https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295396__340.png"
										: `https://backend-leap2-production.up.railway.app/users/getUserProfilePhoto/${user.photo}`
								}
							/>
							<Popover
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								onClick={() => setAnchorEl(null)}
								open={open}>
								<Typography
									onClick={() => {
										deleteCookie("token");
										deleteCookie("userId");
										location.reload();
										setAnchorEl(null);
									}}>
									{width >= 950 && "??????????"}
									<svg
										aria-hidden='true'
										className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 '
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
											clipRule='evenodd'></path>
									</svg>
								</Typography>
							</Popover>
						</div>
						{width >= 950 && isLoggedIn && (
							<div
								className='flex items-center order-2'
								onClick={() => {
									setOpenshadow(true);
									setCactive(true);
									setAnchorEl(null);
								}}>
								<AddCircleIcon />
								?????? ??????????
							</div>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
};
