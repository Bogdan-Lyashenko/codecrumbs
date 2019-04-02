import * as React from 'react';
import { MemberEntity, MemberErrors } from '../../model';
import { MemberForm } from './memberForm';

interface Props {
  member: MemberEntity;
  memberErrors: MemberErrors;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const MemberPage: React.StatelessComponent<Props> = (props) => {
  return (
    <MemberForm
      member={props.member}
      memberErrors={props.memberErrors}
      onChange={props.onChange}
      onSave={props.onSave}
    />
  );
}
