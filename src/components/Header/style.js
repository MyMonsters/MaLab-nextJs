import styled from 'styled-components';
export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #f8f9fa;
  z-index: 401;
  height: 64px;
  display: flex;
  line-height: 64px;
  .ant-dropdown-open {
    font-size: 30px;
    width: 300px;
  }
`;

export const HeaderLeft = styled.div`
  width: 40%;
  .myicon {
    margin: auto 5% auto 5%;
  }
`;
export const HeaderRight = styled.div`
  width: 60%;
  display: flex;

  justify-content: space-around;
  .toggle-btn-menu {
    display: none;
    line-height: 64px;
  }
  .icon {
    margin-top: 18px;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    .header-item {
      display: none;
    }
    .toggle-btn-menu {
      display: block;
    }
  }
  .active {
    border-bottom: 2px solid black;
  }
  .header-item {
    cursor: pointer;
    font-family: Verdana, Geneva, Tahoma, 微软黑体;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    a {
      color: black;
      padding-bottom: 10px;
      text-decoration: none;
      &:hover {
        border-bottom: 2px solid black;
      }
    }
  }
  .change-lan {
    width: 20px;
    height: 20px;
    margin-top: 6px;
    cursor: pointer;
  }
  .toggle-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .toggle-slot {
    /* display: inline-block; */
    margin-left: 10px;
    position: relative;
    height: 2em;
    width: 4em;
    border: 2px solid #e4e7ec;
    border-radius: 10em;
    background-color: white;
    box-shadow: 0px 10px 25px #e4e7ec;
    transition: background-color 250ms;
  }

  .toggle-checkbox:checked ~ .toggle-slot {
    background-color: #374151;
  }
  .toggle-checkbox:checked ~ .mycontent {
    background-color: #2f2f2f;
  }
  .toggle-button {
    transform: translate(2.2em, 0.3em);
    position: absolute;
    height: 1.3em;
    width: 1.3em;
    border-radius: 50%;
    background-color: #ffeccf;
    box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
    transition: background-color 250ms, border-color 250ms,
      transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
    background-color: #485367;
    box-shadow: inset 0px 0px 0px 0.75em white;
    transform: translate(0.5em, 0.3em);
  }

  .sun-icon {
    position: absolute;
    height: 1.3em;
    width: 1.3em;
    color: #ffbb52;
  }

  .sun-icon-wrapper {
    position: absolute;
    height: 1.3em;
    width: 1.3em;
    opacity: 1;
    transform: translate(0.5em, -0.7em) rotate(15deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
    opacity: 0;
    transform: translate(3em, 2em) rotate(0deg);
  }

  .moon-icon {
    position: absolute;
    height: 1.3em;
    width: 1.3em;
    color: white;
  }

  .moon-icon-wrapper {
    position: absolute;
    height: 1.3em;
    width: 1.3em;
    opacity: 0;
    transform: translate(0em, 0em) rotate(0deg);
    transform-origin: -190% 50%;
    transition: opacity 150ms,
      transform 500ms cubic-bezier(0.26, 2.5, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
    opacity: 1;
    transform: translate(2.2em, 0.18em) rotate(-15deg);
  }
  .mybg {
    background-color: white;
  }
  .toggle-checkbox:checked + .mybg {
    background-color: #2f2f2f !important;
    color: wheat !important;
    width: 100%;
  }
  .dark-mode {
    background-color: #2f2f2f !important;
    color: rgb(177, 168, 168) !important;
  }

  /* .ant-affix {
    font-size: large;
  } */
  /* :where(.css-dev-only-do-not-override-10ed4xt)[class*=' ant-affix'] {
    font-size: 18px;
  } */
`;
