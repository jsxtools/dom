import { GetAttributes, GetRoles, GlobalAttributes } from '../Attributes';
type imgType = Partial<GlobalAttributes<HTMLElementTagNameMap['img']> & GetAttributes<'alt' | 'crossorigin' | 'decoding' | 'height' | 'ismap' | 'loading' | 'referrerpolicy' | 'sizes' | 'srcset' | 'width' | 'usemap'> & GetRoles<'button' | 'checkbox' | 'link' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'progressbar' | 'scrollbar' | 'separator' | 'slider' | 'switch' | 'tab' | 'treeitem' | 'none' | 'presentation'>> & GetAttributes<'src'>;
export interface img extends imgType {
}
export {};
