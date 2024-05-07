'use client';
import { Tables } from '@/types/database.types';
import React from 'react';
import { isEmpty, map } from 'lodash';
import { Spinner } from '@nextui-org/react';
import BotCard from '@/components/BotCard';
import { useBotList } from '@/app/hooks/useBot';
import FullPageSkeleton from '@/components/FullPageSkeleton';
import { Assistant } from 'petercat-lui';

declare type Bot = Tables<'bots'>;

const ASSISTANT_API_HOST = process.env.NEXT_PUBLIC_ASSISTANT_API_HOST;

export default function Home() {
  const { data: bots, isLoading, error } = useBotList();
  if (isLoading) {
    return <FullPageSkeleton />;
  }
  if (error) {
    return <div>Error loading bots!{error.message}</div>;
  }

  return (
    <div>
      <Assistant host={ASSISTANT_API_HOST} />

      <div className="container mx-auto max-w-[1024px]">
        <div className="mt-8">
          <div className="text-center text-purple-500 text-base font-semibold font-['PingFang SC']">
            <div className="uppercase">Bot-market</div>
            <div className="m-1 leading-[62px] text-indigo-950 text-[50px]">
              人才市场
            </div>
          </div>

          <div className="grid grid-flow-row-dense grid-cols-3 gap-8 my-8">
            {!isEmpty(bots) &&
              map(bots, (bot: Bot) => <BotCard key={bot.id} bot={bot} />)}
          </div>
        </div>
      </div>
    </div>
  );
}