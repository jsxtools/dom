import { GetAttributes, GetType, GlobalAttributes } from '../Attributes';
export interface style extends Partial<GlobalAttributes<HTMLElementTagNameMap['style']> & GetAttributes<'media' | 'nonce' | 'title'> & GetType<'Style'>> {
}
