interface filtersProps {
  filters: any[]
}
const Filters: React.FC<filtersProps> = ({ filters }) => {
  return (
    <div className="filters-container">
      {filters && filters.map((filter: any) => (
        <div key={filter.id} className="filter-item">
          {filter.icon && <span className="filter-icon absolute-center">{filter.icon}</span>}
          <span className="filter-title">{filter.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Filters