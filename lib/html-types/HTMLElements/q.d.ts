import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';
export interface q extends Partial<GlobalAttributes<HTMLElementTagNameMap['q']> & GetAttributes<'cite'> & GetRoles> {
}
