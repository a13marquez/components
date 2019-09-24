import styled from 'styled-components';


const StyledMagicTile = styled.div`
    background: #303841;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    > :first-child {
      height: calc(100% - 6.8rem);
      width: 100%;
      object-fit: cover;
    }
    > :last-of-type() {
      font-size: 2rem;
      padding: 2rem 0.5rem;
    }
`;

export default StyledMagicTile;

// <a
// href="https://www.checkout.a13marquez.com/"
// target="_blank"
// className="project project-tile"
// >
// <img
//   className="project-image"
//   src="https://raw.githubusercontent.com/a13marquez/checkout/master/img/checkout.jpeg"
//   alt="checkout-project"
// />
// <p className="project-title">
//   <span className="code">&lt;</span>
//   Beer store checkout
//   <span className="code">&#47;&gt;</span>
// </p>
// </a>