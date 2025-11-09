import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },
  searchControl: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    columnGap: 24,
  },
  filterContainer: {
    alignItems: "center",
    width: 60,
    height: 60,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  showMoreButton: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#34967C",
  },
  showMoreButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#34967C",
  },
});

export { styles };
