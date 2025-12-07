"use client";

import React from "react";
import Image from "next/image";
import type { UserWithStatus } from "@/types/user";
import { VIEW_DETAILS_BUTTON_LABEL } from "@/constants/cards/cardsConstants";
import { NOT_AVAILABLE } from "@/constants/commonConstants";

interface UserCardProps {
  user: UserWithStatus;
  onClick: (user: UserWithStatus) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <div className="relative bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 border border-gray-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-pink-400/10 to-orange-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex justify-center mb-5">
          <div className="relative">
            <div className="w-24 h-24 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white">
              <span className="text-3xl font-bold text-white">
                {user?.name?.charAt(0)?.toUpperCase() || "?"}
              </span>
            </div>
            <div
              className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-4 border-white shadow-lg ${
                user?.status === "Active" ? "bg-green-500" : "bg-gray-400"
              }`}
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-center mb-2 truncate">
          {user?.name || NOT_AVAILABLE}
        </h3>

        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-6 h-6 bg-linear-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-xs">🏢</span>
          </div>
          <p className="text-sm text-gray-600 font-medium truncate">
            {user?.company?.name || NOT_AVAILABLE}
          </p>
        </div>

        <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-xl p-3 mb-4">
          <p className="text-sm text-gray-700 text-center truncate font-medium">
            {user?.email || NOT_AVAILABLE}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-5">
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200">
            <Image
              src="/icons/location.svg"
              alt=""
              width={14}
              height={14}
              className="opacity-70"
            />
            <span className="text-xs text-gray-600 font-medium">
              {user?.address?.city || NOT_AVAILABLE}
            </span>
          </div>
        </div>

        <div className="flex justify-center mb-5">
          <span
            className={`relative px-5 py-2 text-xs font-bold rounded-full shadow-lg ${
              user?.status === "Active"
                ? "bg-linear-to-r from-green-400 to-emerald-500 text-white"
                : "bg-linear-to-r from-gray-300 to-gray-400 text-gray-700"
            }`}
          >
            <span className="relative z-10">{user?.status || NOT_AVAILABLE}</span>
            {user?.status === "Active" && (
              <span className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse" />
            )}
          </span>
        </div>

        <button
          onClick={() => onClick(user)}
          className="group relative w-full py-3.5 px-4 bg-linear-to-r from-blue-600 to-purple-600 cursor-pointer hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg hover:shadow-xl active:scale-95 overflow-hidden"
          aria-label={`View details for ${user?.name || "user"}`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {VIEW_DETAILS_BUTTON_LABEL}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};
