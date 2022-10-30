import { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/useStore';
import { selectUsers } from '../../store/selectors';
import { fetchUsers } from '../../store/thunks/fetchUsers';
import { IPage } from '../../store/types';
import Button from '../UI/Button/Button';
import ErrorBlock from '../UI/ErrorBlock/ErrorBlock';
import Loader from '../UI/Loader/Loader';
import User from '../UI/User/User';
export interface IUsersProps {
}

const Users: React.FC = () => {
	const dispatch = useCustomDispatch()
	const { count, page, users, total_pages, total_users, isLoading, isError } = useCustomSelector(selectUsers)
	const getUsers = () => {
		let new_page = page + 1
		const obj = {
			count,
			page: new_page
		} as IPage
		dispatch(fetchUsers(obj))
	}
	useEffect(() => {
		dispatch(fetchUsers({ count, page }))
	}, []);
	return (
		<section className='users'>
			<div className="container">
				<div className="users-wrap">
					<h2 className="users__title title">Working with GET request</h2>
					<div className={
						`users-list
						${isLoading ? 'loader-wrap' : ''}
						${isError ? 'error-block-wrap' : ''}
						`}>
						{isLoading && <Loader />}
						{isError && <ErrorBlock />}
						{
							users.map(user => (
								<User
									key={user.id}
									id={user.id}
									photo={user.photo}
									name={user.name}
									position={user.position}
									email={user.email}
									phone={user.phone}
									classes='users__item'
								/>
							))
						}
					</div>
					{
						(page !== total_pages || total_users < count) && !isError &&
						<Button
							onClick={getUsers}
							text="Show more"
							classes='users__btn'
							disabled={isLoading}
						/>
					}

				</div>
			</div>
		</section>
	);
}
export default Users
