import { useState } from 'react';
export enum EModal {
	SUCCEESS = "success",
	ERROR = "error"
}
export const useModal = () => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [typeModal, setTypeModal] = useState<EModal>(EModal.SUCCEESS);
	const [textModal, setTextModal] = useState<string | false>(false);
	const showModal = (type: EModal, text?: string) => {
		if (text) setTextModal(text)
		setTypeModal(type)
		setIsOpenModal(true)
	}
	const closeModal = () => {
		setIsOpenModal(false)
	}
	return {
		isOpenModal,
		typeModal,
		textModal,
		showModal,
		closeModal
	}
}