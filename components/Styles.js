const { default: styled } = require("styled-components");

export const FormStyle = styled.form`
    display: grid;
    grid-template-columns: 200px;
    gap: 20px;

    button {
        width: 50%;
        padding: 0;
        padding-top: 7px;
        padding-bottom: 7px;
    }
`;
export const FieldsetStyle = styled.fieldset`
    display: grid;
    grid-template-columns: 200px;
    gap: 15px;
`;

export const MenuListStyle = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .userName {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
`;