import React from 'react';
import { createNumber } from '../../../helpers/createNumber';
import Tooltip from '../Tooltip/Tooltip';

interface IUserProps {
	id: string
	photo: string;
	name: string;
	position: string;
	email: string;
	phone: string;
	classes?: string
}

const User: React.FC<IUserProps> = ({
	id,
	photo,
	name,
	position,
	email,
	phone,
	classes
}) => {
	return (
		<div className={`user ${classes ? classes : ''}`}>
			<div className="user__ava">
				<img src={photo} alt="" width="70px" height="70px" />
			</div>
			<div className="user__name nowrap">{name}</div>
			<div className="user__post nowrap">{position}</div>
			<div className="user__email nowrap">
				<a href={`mailto:${email}`} data-tip data-for={`email-${id}`}>{email}</a>
				<Tooltip text={email} id={`email-${id}`} />
			</div>
			<div className="user__phone nowrap">
				<a href={`tel:${phone}`} data-tip data-for={`phone-${id}`}>{createNumber.get(phone)}</a>
				<Tooltip text={createNumber.get(phone)} id={`phone-${id}`} />
			</div>
		</div>
	)
};

export default User;
