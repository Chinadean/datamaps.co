import React from 'react';

import { purple600, greyDark } from 'styles/colors';

function GlobalStyles() {
  return (
    <div>
      <style jsx global>{`
        html {
          height: 100%;
        }

        body {
          height: 100%;
        }

        h4 {
          margin-bottom: 0 !important;
        }

        p {
          margin-bottom: 0;
        }

        .map-select .Select-control {
          height: 40px;
        }

        .data-classification .Select-control {
          border-color: ${purple600};
        }

        .ReactModal__Body--open {
          overflow: hidden;
        }

        .box-shadow {
          box-shadow: 0px 2px 4px 0px ${greyDark};
        }

        @media only screen and (max-width: 48em) {
          .hide-xs {
            display: none;
          }
        }

        @media only screen and (min-width: 48em) {
          .show-xs {
            display: none;
          }
        }

        @media only screen and (max-width: 950px) {
          .hide-sm {
            display: none;
          }
        }

        @media only screen and (min-width: 950px) {
          .show-sm {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default GlobalStyles;
