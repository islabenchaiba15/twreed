export function ProductDetails() {
    const details = [
      { label: 'Forme de mallettes', value: 'ROND' },
      { label: 'Longueur de la bande', value: '20cm' },
      { label: 'Type de fermoir', value: 'Boucle' },
      { label: 'Profondeur de résistance à l\'eau', value: 'Bars' },
      { label: 'Point d\'origine', value: 'Guangdong, China' },
      { label: 'Type', value: 'Charme, Mode' },
      { label: 'Dispositif', value: 'Non Specifié' },
      { label: 'Utilisateur', value: 'Unisexe' },
      { label: 'Mouvement Marque', value: 'PEKIN' }
    ]
  
    return (
      <section className="py-8 border-t">
        <h2 className="text-xl font-medium mb-4">Details de l&apos;article</h2>
        <div className="divide-y">
          {details.map((detail, index) => (
            <div key={index} className="grid grid-cols-2 py-3">
              <div className="text-gray-600">{detail.label}</div>
              <div>{detail.value}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  