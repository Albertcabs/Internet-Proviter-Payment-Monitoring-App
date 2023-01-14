import React from 'react';
import { ListContext } from './App';
import SearchComp from './SearchComp';

import ButtonImgComp from './ButtonComp/ButtonImgComp';
import IconIsp from './IconIspComp';

import refreshSvg from '../img/refresh.svg';
import settingSvg from '../img/setting.svg';
import addListSvg from '../img/addList.svg';
import menuSvg from '../img/menu.svg'

const AppHeader = () => {
      const show = React.useContext(ListContext);
      const { data, setData } = show;

      const onclickHandler = (name: string) => {
            switch (name) {
                  case 'AddList': {
                        setData({ ...data, showComp: 'showFormComp' });
                        break;
                  }
                  case 'refrech': {
                        console.log('refrech button');
                        setData({ ...data, reload: true });
                        break;
                  }
                  case 'setting': {
                        console.log('setting button');
                        break;
                  }

                  default: {
                        console.log('no click button at header');
                        break;
                  }
            }
      };

      return (
            <div className='sticky top-0 h-[65px] w-full   flex-row z-30  '>
                  <div className='flex w-full h-full  bg-green-900 items-center mr-2 '>
                        <IconIsp />
                        <h2 className='hidden  lg:inline-block flex-none   mr-4 text-lg text-yellow-50 '>
                              Internet Provider Master List
                        </h2>
                        <SearchComp />
                        <div className=' flex justify-evenly py-1 w-32 bg-green-900 '>
                              <ButtonImgComp
                                    imgSrc={addListSvg}
                                    name='AddList'
                                    onclick={onclickHandler}
                                    classData='h-7'
                              />
                              <ButtonImgComp
                                    imgSrc={refreshSvg}
                                    name='Refrech'
                                    onclick={onclickHandler}
                                    classData=' h-7'
                              />
                              <ButtonImgComp
                                    imgSrc={settingSvg}
                                    name='Setting'
                                    onclick={onclickHandler}
                                    classData=' h-7'
                              />
                        </div>{' '}
                        <div className=' w-8 h-8 '>
                              <img src={menuSvg} alt='menu' />
                        </div>
                  </div>
            </div>
      );
};

export default React.memo(AppHeader);
