import { appWindow } from "@tauri-apps/api/window";

export function TitleBar() {
  let settingsRef: HTMLDialogElement | undefined;

  function handleClose() {
    appWindow.close();
  }

  function handleSettings() {
    settingsRef?.showModal();
  }

  function handleMinimize() {
    appWindow.minimize();
  }

  return (
    <>
      <div
        class="flex items-center justify-end gap-x-4 border-t-2 border-t-[#785a28] p-3"
        data-tauri-drag-region="true"
      >
        <button type="button" onClick={handleMinimize}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={2}
            class="size-4 stroke-[#A09B8C] hover:stroke-[#F0E6D2]"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <button type="button" onClick={handleSettings}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="size-4 fill-[#A09B8C] hover:fill-[#F0E6D2]"
          >
            <path
              fill-rule="evenodd"
              d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button type="button" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={2.5}
            class="size-4 stroke-[#A09B8C] hover:stroke-[#F0E6D2]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <dialog
        ref={settingsRef}
        class="relative h-[80vh] w-[54vw] overflow-hidden border-2 border-[#785a28] bg-[#010a13] p-2"
      >
        <div class="flex items-center justify-center gap-x-2 py-4">
          <strong class="text-lg uppercase text-[#A09B8C]">Client</strong>
          <strong class="text-lg uppercase text-[#A09B8C]">/</strong>
          <strong class="text-lg uppercase text-[#F0E6D2]">General</strong>
          <button type="button" class="ml-auto px-8 text-[#A09B8C]">
            Restore Defaults
          </button>
        </div>
        <div class="absolute bottom-4 flex w-full items-center justify-center">
          <button
            type="button"
            onClick={() => settingsRef?.close()}
            class="uppercase text-[#F0E6D2]"
          >
            Done
          </button>
        </div>
      </dialog>
    </>
  );
}
