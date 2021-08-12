import styled from "styled-components";

export const ProjectListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  .projectItem {
    border: 1px solid gray;
    border-radius: 14px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;
