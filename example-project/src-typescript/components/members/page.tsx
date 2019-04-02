import * as React from 'react';
import { Link } from 'react-router-dom';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';
import { AppView } from '../../layout';

interface Props {
}

const useMembers = () => {
  const [members, setMembers] = React.useState([]);
  let promise: Promise<MemberEntity[]>;

  const loadMembers = () => {
    promise = memberAPI.fetchMembersAsync();
    promise.then((members) => {
      setMembers(members);
    }).catch(error => console.log(error));
  }

  return { members, loadMembers };
}

export const MembersPage: React.StatelessComponent<Props> = () => {

  const { members, loadMembers } = useMembers();

  React.useEffect(() => {
    loadMembers();
  }, []);

  return (
    <AppView>
      <div className="row">
        <h2> Members Page</h2>
        <Link to="/member">New Member</Link>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {
              members.map((member) =>
                <MemberRow
                  key={member.id}
                  member={member}
                />
              )
            }
          </tbody>
        </table>
      </div>
    </AppView>
  );
}
