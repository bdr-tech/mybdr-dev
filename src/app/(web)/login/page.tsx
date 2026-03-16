"use client";

import { useActionState } from "react";
import { devLoginAction } from "@/app/actions/auth";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(devLoginAction, null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#F4A261]">BDR</h1>
        <p className="mt-1 text-sm text-[#6B7280]">농구인을 위한 농구 플랫폼</p>
        <span className="mt-2 inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-500">
          DEV MODE
        </span>
      </div>

      <div className="w-full max-w-sm rounded-[20px] border border-[#E8ECF0] bg-[#FFFFFF] px-8 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
        {state?.error && (
          <div className="mb-5 rounded-[12px] bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {state.error}
          </div>
        )}

        <form action={formAction}>
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-[14px] bg-[#F4A261] px-4 py-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#E8914F] active:scale-[0.99] disabled:opacity-50"
          >
            {pending ? "로그인 중..." : "Dev 로그인"}
          </button>
        </form>

        <p className="mt-4 text-center text-[10px] text-[#9CA3AF]">
          개발 전용 — 첫 번째 유저로 자동 로그인
        </p>
      </div>
    </div>
  );
}
