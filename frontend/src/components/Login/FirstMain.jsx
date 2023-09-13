import React from 'react';
import styled from 'styled-components';
import kakao from '../../assets/Login/kakao.svg';


const PageWrapper = styled.div`
    height: calc(var(--vh, 1vh) * 100);
    width: 393px;
    background : #FFD0D0; 
    display: inline-flex;
    padding: 315px 24px 335px 24px;
    flex-direction: column;
    align-items: center;
`

const LoginTitle = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 27px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

const KakaoLogin = styled.button`
    width: 345px;
    height: 75px;
    color: #000;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 18px;
    background: #FEE500;
    border: none;
    
`

const KakaoImg = styled.img`
    margin-bottom: -3px;
    margin-left: -15px;
    width: 58px;
    height: 25px;
    flex-shrink: 0;

`

const FirstMain = () => {
    const Rest_api_key= process.env.REACT_APP_REST_API_KEY //REST API KEY
    const redirect_uri = `${process.env.REACT_APP_HOME_URL}/auth`
    //Redirect URI to backend
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return (
        <PageWrapper>
            <LoginTitle>연두부에서  <br/>스마트한 결혼 자금 모으기</LoginTitle>
            <KakaoLogin onClick={handleLogin}><KakaoImg src={kakao} />카카오톡으로 시작하기</KakaoLogin>
        </PageWrapper>
    );
};

export default FirstMain;