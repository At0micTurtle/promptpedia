'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

export default function MyProfile() {
  const { data: session } = useSession();
  const [myPosts, setMyPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/prompts` );
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) {
      fetchPrompts();
    }
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post.id}`);
  };

  const handleDelete = async (post) => {

  };

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page!'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
};
