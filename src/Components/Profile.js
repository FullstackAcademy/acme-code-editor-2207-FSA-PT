import React, { useState } from 'react'
import Editor from './Editor';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { auth } = useSelector(state => state);
  const [code, setCode ] = useState(auth.code);
  return (
    <div>
      <Editor value={ code } onChange={ setCode }/>
      <pre>
{ code }
      </pre>
    </div>
  );
};

export default Profile;
