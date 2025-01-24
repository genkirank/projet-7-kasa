import '../../assets/PageError.scss'
export default function PageError() {
  return (
    <div className='conteneur'>
      <div className='titres'>404</div>
      <div className='h2'>Oups! La page que vous demandez n'existe pas.</div>
      <a
        className='custom-link'
        href='/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Retourner sur la page d’accueil{' '}
      </a>
    </div>
  )
}
