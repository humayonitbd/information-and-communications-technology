export type TNoticDetails = {
  title: string;
  details: string;
};

const NoticeModal = ({ noticeDetails }: { noticeDetails?: TNoticDetails }) => {
  
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{noticeDetails?.title}</h3>
          <p className="py-4">{noticeDetails?.details}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NoticeModal;
