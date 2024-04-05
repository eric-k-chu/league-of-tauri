import { appWindow } from "@tauri-apps/api/window";
import { Settings } from "./Settings";

export function TitleBar() {
  function handleClose() {
    appWindow.close();
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
        <Settings />
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
    </>
  );
}
