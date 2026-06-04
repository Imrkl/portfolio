function Contact({ language }) {
  const text = {
    ru: {
      title: 'Контакты',
      phoneLabel: 'Телефон',
      telegramLabel: 'Телеграм',
      phone: '+998 90 120 13 65',
      telegram: 'Imerkl',
    },
    en: {
      title: 'Contact',
      phoneLabel: 'Phone',
      telegramLabel: 'Telegram',
      phone: '+998 90 120 13 65',
      telegram: 'Imerkl',
    }
  }

  return (
    <section className="contact">
      <h2>{text[language].title}</h2>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>{text[language].phoneLabel}</h3>
          <a href={`tel:${text[language].phone.replace(/\s+/g, '')}`}>{text[language].phone}</a>
        </div>

        <div className="contact-card">
          <h3>{text[language].telegramLabel}</h3>
          <a href={`https://t.me/${text[language].telegram}`} target="_blank" rel="noopener noreferrer">
            {text[language].telegram}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
