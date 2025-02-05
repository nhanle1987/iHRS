import {PageContainerWrapper} from './styled';

export default ({ children, title }) => {
  return (
    <>
      <div className="page-title">
        <h3>{title}</h3>
      </div>
      <PageContainerWrapper>
        {children}
      </PageContainerWrapper>
    </>
  );
}
