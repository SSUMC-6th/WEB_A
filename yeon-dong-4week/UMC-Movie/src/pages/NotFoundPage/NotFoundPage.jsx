import React from "react"
import { StyledNotFoundPage, MainButton } from "./NotFoundPage.style"

function NotFoundPage() {

    return (
      <>
        <StyledNotFoundPage>
          Oops!
          <p>
            예상치 못한 에러가 발생했습니다.
          </p>
          <div>
            Not Found
          </div>
          <MainButton href="/">메인으로 이동하기</MainButton>
        </StyledNotFoundPage>
      </>
    )
  }
  
  export default NotFoundPage
  