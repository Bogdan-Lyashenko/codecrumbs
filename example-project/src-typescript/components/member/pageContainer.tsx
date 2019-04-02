import * as React from 'react';
import * as toastr from 'toastr';
import { RouteComponentProps } from 'react-router';
import { FieldValidationResult } from 'lc-form-validation';
import { memberAPI } from '../../api/member';
import { MemberEntity, MemberErrors } from '../../model';
import { memberFormValidation } from './memberFormValidation';
import { MemberPage } from './page';
import { Header } from '../header';

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {
}

export const MemberPageContainer: React.StatelessComponent<Props> = (props: Props) => {

  const [member, setMember] = React.useState({
    id: -1,
    login: '',
    avatar_url: '',
  });

  const [memberErrors, setMemberErrors] = React.useState({
    login: new FieldValidationResult(),
  });

  const loadMember = () => {
    const memberId = Number(props.match.params.id) || 0;
    memberAPI.fetchMemberById(memberId)
      .then((member) => setMember(member));
  }

  React.useEffect(() => {
    loadMember();
  }, []);

  const onFieldValueChange = (fieldName: string, value: string) => {
    memberFormValidation.validateField(member, fieldName, value)
      .then((fieldValidationResult) => {
        setMember({
          ...member,
          [fieldName]: value
        });
        setMemberErrors({
          ...memberErrors,
          [fieldName]: fieldValidationResult,
        });
      });
  }

  const onSave = () => {
    memberFormValidation.validateForm(member)
      .then((formValidationResult) => {
        if (formValidationResult.succeeded) {
          memberAPI.saveMember(member)
            .then(() => {
              toastr.success('Member saved.');
              props.history.goBack();
            });
        }
      });
  }

  return (
    <div>
      <Header />
      <MemberPage
        member={member}
        memberErrors={memberErrors}
        onChange={onFieldValueChange}
        onSave={onSave}
      />
    </div>
  );
}
