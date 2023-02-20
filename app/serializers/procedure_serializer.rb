class ProcedureSerializer < ActiveModel::Serializer
  # changed structure of procedures table;
  # makin it easy to add/remove/update/read procedures
  attributes :id, :name, :price
end
