import React from 'react';
import { createPortal } from "react-dom"

interface IModalProps {
	active: boolean;
	closeModal: () => void;
	children: JSX.Element;
	classes?: string
}

const Modal: React.FC<IModalProps> = ({ active, closeModal, children, classes }) => {
	return createPortal(
		<div
			className={`modal ${classes ? classes : ""} ${active && 'active'}`}
			onClick={closeModal}
		>
			<div className='modal-content' onClick={(e) => { e.stopPropagation() }}>
				<div className="modal__close" onClick={closeModal}></div>
				{children}
			</div>
		</div>
		, document.body)

}

export default Modal;