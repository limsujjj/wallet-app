import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";

export default function Facebook() {
    const [content, setContent] = useState('내용')
    
    function onClickHome() {
        setContent('homeho')
    }
    function onClickMem() {
        setContent('memememem')
    }
    function onClickGroup() {
        setContent('gruproro')
    }
    function onClickGame() {
        setContent('gamemem')
    }
    return <>
        <Stack sx={{height: '80vh'}}>
            <Stack direction="row"  sx={{ background: 'blue', px: 2 }}>
                <Box sx={{ flexGrow: 1, fontSize: 20, fontWeight: 'bold' }}>FACEBOOK</Box>
                <Button>설정</Button>
            </Stack>

            
            <Stack direction="row" sx={{ background: 'gray' }}>
                <Button onClick={onClickHome}>홈</Button>
                <Button onClick={onClickMem}>회원</Button>
                <Button onClick={onClickGroup}>그룹</Button>
                <Button onClick={onClickGame}>게이밍</Button>
            </Stack>

            <Box sx={{ flexGrow: 1 }}>{content}</Box>

            <Stack direction="row">
            <Box sx={{ flexGrow: 1 }}>ⓒ2021 Facebook</Box>
            <Box sx={{ flexGrow: 0 }}>Sitemap</Box>
            </Stack>
        </Stack>
    </>
}