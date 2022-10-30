import React from 'react';
import { EModal } from '../../hooks/useModal';
import Error from '../UI/Error/Error';
import Success from '../UI/Success/Success';

interface IContentModal {
	type: EModal
	text?: string | false
}

const ContentModal: React.FC<IContentModal> = ({ type, text }) => {
	switch (type) {
		case EModal.SUCCEESS:
			return <Success />
		case EModal.ERROR:
			return <Error text={text ? text : 'Sorry, an error has occurred. Try again.'} />
		default:
			return <Success />
	};
}
export default ContentModal;
