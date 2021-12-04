import { More } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import Chat from "./tap/Chat";
import Gift from "./tap/Gift";
import Member from "./tap/Member";


export default function Kakao() {
    
    const [content, setContent] = useState('내용~~')
    //let content = '내용~~'
    const [title, setTitle] = userState('title')

    function onClickMember() {
        //alert('hih')
        setContent(<Member />)
        setTitle('회원')
    }

    function onClickChat() {
        //console.log('chat')
        //setContent('채팅 내용')
        // content = '채팅내용ㅇ'
        // Kakao() 화면 다시 그리는 렌더
                //setContent('채팅 내용')
        setContent()

    }

    function onClickGift() {
        setContent()
    }

    function onClickMore() {
        setContent()
    }
    
    return <>
        <Stack sx={{height: '100vh'}}>
            <Stack direction="row" alignItems="center" sx={{ background: 'yellow', height: 50, pl: 2, pr: 2 }}>
                {/* px:2해도 된다(x축, y축) */}
                <Box sx={{ flexGrow: 1, fontSize: 20, fontWeight: 'bold' }}>카카오톡</Box>
                <Button>설정</Button>
            </Stack>

            <Box sx={{ flexGrow: 1 }}>{content}</Box>

            <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{height: 50, background: 'gray'}}>
                <Button sx={{color: 'white'}} onClick={onClickMember}>회원</Button>
                <Button sx={{color: 'white'}} onClick={onClickChat}> 채팅</Button>
                <Button sx={{color: 'white'}} onClick={onClickGift}>선물하기</Button>
                <Button>더보기</Button>
            </Stack>
        </Stack>
    </>
}