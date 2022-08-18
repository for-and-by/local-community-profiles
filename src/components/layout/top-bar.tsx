import InfoModal from "~/components/modals/info";

export default function TopBar() {
  return (
    <div className="pointer-events-auto flex w-full flex-row bg-base-100">
      <InfoModal className="flex h-full items-center px-2">
        <i className="icon icon-info icon-sm before:text-brand-700" />
      </InfoModal>
      <div className="flex flex-grow flex-row space-x-4 py-1 px-2">
        <p className="text-sm text-base-900">Endorsed By Jonathon Sri</p>
      </div>
      <div className="flex flex-row items-center space-x-2 px-2">
        <p className="text-sm text-base-800 underline underline-offset-1">
          Privacy
        </p>
        <p className="text-sm text-base-800 underline underline-offset-1">
          Terms
        </p>
      </div>
    </div>
  );
}