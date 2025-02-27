const StatCard = ({ value, label }: { value: string; label: string }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-blue-100/50 border border-gray-100 hover:shadow-xl transition-all">
      <h3 className="text-3xl font-normal mb-2 text-gray-900">{value}</h3>
      <p className="text-gray-600 font-light">{label}</p>
    </div>
  );
  
  export default StatCard;
  