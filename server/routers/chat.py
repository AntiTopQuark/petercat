import asyncio
from typing import Optional
from fastapi import APIRouter, Cookie, Depends
from fastapi.responses import StreamingResponse
from data_class import ChatData
from agent import qa_chat, bot_builder
from verify.rate_limit import verify_rate_limit


router = APIRouter(
    prefix="/api/chat",
    tags=["chat"],
    responses={404: {"description": "Not found"}},
)

async def generate_auth_failed_stream():
    message = "Auth failed, please login first\n\n"
    yield message

@router.post("/stream_qa", response_class=StreamingResponse, dependencies=[Depends(verify_rate_limit)])
def run_qa_chat(input_data: ChatData):
    result = qa_chat.agent_stream_chat(input_data)
    return StreamingResponse(result, media_type="text/event-stream")


@router.post("/qa", dependencies=[Depends(verify_rate_limit)])
async def run_issue_helper(input_data: ChatData):
    result = await qa_chat.agent_chat(input_data)
    return result


@router.post("/stream_builder", response_class=StreamingResponse, dependencies=[Depends(verify_rate_limit)])
def run_bot_builder(input_data: ChatData, user_id: str = Cookie(None), bot_id: Optional[str] = None):
    if not user_id:
        return StreamingResponse(generate_auth_failed_stream(), media_type="text/event-stream")
    result = bot_builder.agent_stream_chat(input_data, user_id, bot_id)
    return StreamingResponse(result, media_type="text/event-stream")
