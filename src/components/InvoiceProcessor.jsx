import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const InvoiceProcessor = ({ order, user }) => {
  const downloadInvoice = () => {
    const doc = new jsPDF();

    // Add Company Name
    doc.setFontSize(16);
    doc.text("Floral Dreams", 170, 20, { align: "right" });

    // Invoice Title
    doc.setFontSize(20);
    doc.text("Invoice", 20, 30);

    // Order and User Info
    doc.setFontSize(12);
    doc.text(`Tracking Number: ${order.trackingNumber}`, 20, 50);
    doc.text(`Customer Name: ${user.fullName}`, 20, 60);
    doc.text(`Order Date: ${order.date}`, 20, 70);

    // Items Table
    const tableData = order.items.map((item, idx) => [
      idx + 1,
      item.nom,
      item.quantite,
      `$${item.prix}`,
      `$${item.prix * item.quantite}`,
    ]);

    doc.autoTable({
      startY: 80,
      head: [["#", "Item Name", "Quantity", "Unit Price", "Total Price"]],
      body: tableData,
      theme: "grid",
      headStyles: { fillColor: [60, 141, 188] }, // Floral Dreams-themed blue
      styles: { fontSize: 11 },
    });

    // Total Amount
    const total = order.items.reduce(
      (sum, item) => sum + item.prix * item.quantite,
      0
    );

    const finalY = doc.lastAutoTable.finalY + 10; // Position after the table
    doc.setFontSize(14);
    doc.text(`Total: $${total}`, 20, finalY);

    // Save the PDF
    doc.save(`Invoice_${order.trackingNumber}.pdf`);
  };

  return (
    <button
      onClick={downloadInvoice}
      style={{
        padding: "5px 10px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        marginLeft: "10px",
      }}
    >
      Download Invoice
    </button>
  );
};

export default InvoiceProcessor;
