"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  if (params.id === session?.user.id) {
    router.push("/profile");
  }

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };
    if (params?.id) fetchPost();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc="Welcome personalized profile"
      data={userPosts}
    />
  );
};

export default UserProfile;
