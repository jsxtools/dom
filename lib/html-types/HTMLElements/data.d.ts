import { GetRoles, GetValue, GlobalAttributes } from '../Attributes';
export interface data extends Partial<GlobalAttributes<HTMLElementTagNameMap['data']> & GetValue & GetRoles> {
}
