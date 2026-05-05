import logoHdi from '../../../logos/LogoHDI.png';

export function HDIHeader() {
  return (
    <header className="hdi-header">
      <div className="hdi-header__inner">
        <a className="hdi-header__brand" href="/" aria-label="HDI Seguros México">
          <img className="hdi-header__logo" src={logoHdi} alt="HDI Seguros" />
        </a>
      </div>
    </header>
  );
}

export function HDIFooter() {
  const columns = [
    {
      title: 'Seguros',
      links: ['Autos', 'Hogar', 'Empresas'],
    },
    {
      title: 'Atención a clientes',
      links: ['Contacto', 'Reportar siniestro', 'Preguntas frecuentes'],
    },
    {
      title: 'Legal',
      links: ['Aviso de privacidad', 'Términos y condiciones'],
    },
    {
      title: 'Contacto',
      text: 'Canales institucionales de atención y soporte para capacitación interna.',
    },
  ];

  return (
    <footer className="hdi-footer">
      <div className="hdi-footer__inner">
        {columns.map((column) => (
          <section key={column.title} aria-labelledby={toAnchor(column.title)}>
            <h3 id={toAnchor(column.title)}>{column.title}</h3>
            {column.links ? (
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href={`#${toAnchor(link)}`}>{link}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{column.text}</p>
            )}
          </section>
        ))}
      </div>
    </footer>
  );
}

export function PageContainer({ children, as: Component = 'main', className = '' }) {
  return <Component className={`hdi-page-container ${className}`.trim()}>{children}</Component>;
}

export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="hdi-section-header">
      {eyebrow ? <p className="hdi-section-header__eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {description ? <p className="hdi-section-header__description">{description}</p> : null}
    </div>
  );
}

export function PrimaryButton({ children, tone = 'default', type = 'button', ...props }) {
  const toneClass = tone === 'critical' ? 'hdi-button--critical' : 'hdi-button--primary';

  return (
    <button className={`hdi-button ${toneClass}`} type={type} {...props}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, type = 'button', ...props }) {
  return (
    <button className="hdi-button hdi-button--secondary" type={type} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className = '', ...props }) {
  return (
    <section className={`hdi-card ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}

export function Input({ label, id, message, error, ...props }) {
  const inputId = id || toAnchor(label);

  return (
    <label className="hdi-field" htmlFor={inputId}>
      <span className="hdi-label">{label}</span>
      <input className="hdi-input" id={inputId} aria-invalid={Boolean(error)} {...props} />
      {error ? <span className="hdi-field__message hdi-field__message--error">{error}</span> : null}
      {!error && message ? <span className="hdi-field__message">{message}</span> : null}
    </label>
  );
}

export function Select({ label, id, options, message, error, ...props }) {
  const selectId = id || toAnchor(label);

  return (
    <label className="hdi-field" htmlFor={selectId}>
      <span className="hdi-label">{label}</span>
      <select className="hdi-select" id={selectId} aria-invalid={Boolean(error)} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="hdi-field__message hdi-field__message--error">{error}</span> : null}
      {!error && message ? <span className="hdi-field__message">{message}</span> : null}
    </label>
  );
}

export function Table({ columns, rows }) {
  return (
    <div className="hdi-table-wrap">
      <table className="hdi-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Alert({ title, children, variant = 'info' }) {
  return (
    <div className={`hdi-alert hdi-alert--${variant}`} role={variant === 'error' ? 'alert' : 'status'}>
      {title ? <div className="hdi-alert__title">{title}</div> : null}
      <div>{children}</div>
    </div>
  );
}

export function FlowSidebar({ sections, activeId }) {
  return (
    <aside className="hdi-flow-sidebar" aria-label="Navegación del flujo">
      <h2>Flujo operativo</h2>
      <nav>
        <ol className="hdi-flow-sidebar__list">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                className={`hdi-flow-sidebar__link hdi-flow-sidebar__link--${section.status}`}
                href={`#${section.id}`}
                aria-current={section.id === activeId ? 'step' : undefined}
              >
                <span>{section.shortTitle}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}

export function StepList({ steps }) {
  return (
    <ol className="hdi-step-list">
      {steps.map((step) => (
        <li className="hdi-step-list__item" key={step.title}>
          <h3>{step.title}</h3>
          {step.description ? <p>{step.description}</p> : null}
          {step.items ? (
            <ul>
              {step.items.map((item) => {
                const itemText = typeof item === 'string' ? item : item.text;

                return (
                  <li key={itemText}>
                    {typeof item === 'string' || !item.link || !item.linkFirst ? itemText : null}
                    {typeof item === 'string' || !item.link ? null : (
                      <>
                        {' '}
                        <a href={item.link.href} target="_blank" rel="noreferrer">
                          {item.link.label}
                        </a>
                        {item.linkFirst ? itemText : null}
                      </>
                    )}
                    {typeof item === 'string' || !item.children ? null : (
                      <ul>
                        {item.children.map((child) => (
                          <li key={child}>{child}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
          {step.detailSections ? (
            <div className="hdi-step-details">
              {step.detailSections.map((section) => (
                <details className="hdi-step-detail" key={section.title}>
                  <summary>{section.title}</summary>
                  {section.description ? <p>{section.description}</p> : null}
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          ) : null}
          {step.image ? <ImageBlock title="Imagen del flujo" {...step.image} /> : null}
          {step.images
            ? step.images.map((image) => <ImageBlock key={image.src || image.description} title="Imagen del flujo" {...image} />)
            : null}
        </li>
      ))}
    </ol>
  );
}

export function InfoBox({ title = 'Consideraciones', children }) {
  return (
    <section className="hdi-box hdi-box--info">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function WarningBox({ title = 'Errores comunes', children }) {
  return (
    <section className="hdi-box hdi-box--warning">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function SuccessBox({ title = 'Resultado esperado', children }) {
  return (
    <section className="hdi-box hdi-box--success">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function ImageBlock({ title = 'Evidencia visual', description, src, alt }) {
  return (
    <section className="hdi-image-block" aria-label={title}>
      {src ? <img src={src} alt={alt || title} /> : null}
      <div>
        <h3>{title}</h3>
        <p>{description || 'Pendiente agregar captura de pantalla del flujo.'}</p>
      </div>
    </section>
  );
}

export function StatusTag({ status, children }) {
  return <span className={`hdi-status-tag hdi-status-tag--${status}`}>{children}</span>;
}

function statusLabel(status) {
  const labels = {
    active: 'Activo',
    completed: 'Completado',
    pending: 'Pendiente',
  };

  return labels[status] || status;
}

function toAnchor(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
