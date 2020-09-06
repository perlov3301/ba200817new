import React from 'react'
import { useUsersQuery } from '../generated/graphql';

interface Props {}

export const Home: React.FC<Props> = () => {
  const {data } = useUsersQuery({fetchPolicy: 'network-only'});
  if (!data) { return <div>loading...</div> }
        return (
           <fieldset>
             <legend>users</legend>
             <ul>
               {data.users.map(x => {
                 return (
                  <li key={x.id}>
                    {x.tableemail}, {x.id}
                  </li>
                 );
               }
               )}
             </ul>
           </fieldset>
        );
}