'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

export default function MyProfile() {
  const { data: session } = useSession();
  const [myPrompts, setMyPrompts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/prompts` );
      const data = await response.json();

      setMyPrompts(data);
    };

    if (session?.user.id) {
      fetchPrompts();
    }
  }, []);

  const handleEdit = (prompt) => {
    router.push(`/update-prompt?id=${prompt.id}`);
  };

  const handleDelete = async (prompt) => {

  };

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page!'
      data={myPrompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
};
