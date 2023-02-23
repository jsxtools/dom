import { GetAttributes, GlobalAttributes } from '../Attributes';
export interface meta extends Partial<GlobalAttributes<HTMLElementTagNameMap['meta']> & GetAttributes<'charset' | 'content' | 'http-equiv' | 'name'>> {
}
