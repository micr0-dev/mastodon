import CakeSvg from '@/images/cake.svg';

const CakeIcon = () => {
  return (
    <div className='' style={{ width: '200px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', backgroundColor: "#ffffff", padding: '20px', borderRadius: '10px' }}>
      <img src={CakeSvg} alt='Cake' className='icon-button inverted' style={{ width: '200px' }} />
    </div>
  );
};

export default CakeIcon;
