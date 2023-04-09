// import { ModalState, useHomePageContext } from 'pages/Home/context';
// import { useEffect, useState } from 'react';
// import URLs from 'constants/urlConst';
// import Portal from 'portal';
// import { CardData } from '../card/card';
// import cls from './modal.module.scss';

// interface ModalProps {
//   modalData: ModalState;
// }

// function Modal(props: ModalProps) {
//   const {
//     modalData: { id },
//   } = props;
//   const [modalCardData, setModalCardData] = useState<CardData | null>(null);
//   const [isLoading, setLoading] = useState<boolean>(true);

//   const { handleCloseModal } = useHomePageContext;

//   useEffect(() => {
//     const getData = async (idCard: number) => {
//       try {
//         const res = await fetch(`${URLs.BASE_URL}?id=${idCard}`);
//         const prodData = await res.json();
//       } catch (error) {
//         if (error instanceof Error) {
//           throw new Error();
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id && isLoading) getData(id);
//   }, [id, isLoading]);

//   return (
//     <Portal>
//       <div className={cls.modal} onClick={handleCloseModal}>
//         123
//       </div>
//     </Portal>
//   );
// }

// export default Modal;
