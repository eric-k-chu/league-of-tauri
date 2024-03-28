import { appWindow } from "@tauri-apps/api/window";

export function TitleBar() {

  function handleClose() {
    appWindow.close();
  }

  return (
    <div
      class="flex items-center justify-end p-2 border-t-2 border-t-[#785a28]"
      data-tauri-drag-region="true"
    >
      <button type="button" onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width={2.5}
          stroke="currentColor"
          style={{
            stroke: "#A09B8C",
            width: "1rem",
            height: "1rem",
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
