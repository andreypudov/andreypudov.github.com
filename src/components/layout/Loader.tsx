/**
 * Full-screen spinner shown while the page is loading.
 * Its styles are inlined so the spinner renders before any stylesheet loads.
 */
export default function Loader() {
  return (
    <>
      <style>{`
        .loader {
          position: fixed;
          inset: 0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.4s ease, visibility 0.4s ease;

          &.hidden {
            opacity: 0;
            visibility: hidden;
          }

          .spinner {
            fill: #212529;
            width: 50px;
            height: 50px;
            opacity: 0;
            animation: fadeIn 4s ease forwards, spin 4s linear infinite;
            animation-delay: 0.4s;
          }
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>

      <div className="loader">
        <svg className="spinner" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266.83 266.83">
          <path d="M133.415,0C59.85,0,0,59.85,0,133.415S59.85,266.83,133.415,266.83S266.83,206.98,266.83,133.415S206.98,0,133.415,0z
            M249.81,155.219l-72.767-72.767h63.246c7.394,15.444,11.541,32.728,11.541,50.963C251.83,140.863,251.132,148.149,249.81,155.219z
            M183.073,153.575l-30.803,30.803H111l-29.854-29.854v-39.649c0.14-0.121,0.281-0.241,0.414-0.374l32.05-32.05h42.22l27.243,27.243
            V153.575z M231.709,67.452h-72.773H128.61l45.313-45.313C197.635,30.798,217.827,46.832,231.709,67.452z M157.405,17.444
            l-52.204,52.205L83.757,91.092V25.931C98.868,18.921,115.691,15,133.415,15C141.632,15,149.655,15.843,157.405,17.444z
            M66.146,36.019v103.506L21.458,94.836C29.764,70.799,45.606,50.25,66.146,36.019z M17.02,111.611l51.323,51.323l21.444,21.444
            H26.541C19.147,168.934,15,151.65,15,133.415C15,125.968,15.698,118.681,17.02,111.611z M35.121,199.378h72.773h29.376
            l-45.054,45.054C68.803,235.716,48.868,219.797,35.121,199.378z M109.425,249.386l52.204-52.205
            c0.768-0.768,1.334-1.677,1.703-2.652l19.741-19.741v66.111c-15.111,7.009-31.934,10.931-49.658,10.931
            C125.198,251.83,117.175,250.987,109.425,249.386z M198.073,232.569v-75.888v-29.376l46.618,46.618
            C235.851,198.132,219.32,218.667,198.073,232.569z"/>
        </svg>
      </div>
    </>
  );
}
