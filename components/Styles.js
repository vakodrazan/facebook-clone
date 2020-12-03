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